export function CheckPathname(pathname: string): boolean {
  return (
    pathname.startsWith("/documents/edit-invoice") ||
    pathname.startsWith("/documents/edit-creditnote")
  );
}
