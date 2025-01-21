export type Status =
  | "none"
  | "paid"
  | "draft"
  | "unpaid"
  | "active"
  | "archived"
  | "completed"
  | "processing"
  | "partial payment"
  | "awaiting payment"
  | "fixed (Non-current) assets"
  | "current assets"
  | "non-current liabilities"
  | "current liabilities"
  | "equity and reserves"
  | "income"
  | "cost of sales"
  | "administrative expenses"
  | "profit & loss";

export const getStatusClasses = (status: Status): string => {
  const statusClasses: Record<Status, string> = {
    none: "",
    active:
      "text-text-success dark:text-dark-text-success bg-surface-success dark:bg-dark-surface-success",
    unpaid: " text-text-critical bg-surface-critical",
    draft:
      "text-text-alert dark:text-dark-text-alert bg-surface-alert dark:bg-dark-surface-alert",
    completed:
      "text-text-success dark:text-dark-text-success bg-surface-success dark:bg-dark-surface-success",
    archived:
      "text-text-secondary dark:text-dark-text-secondary bg-surface-subdued dark:bg-dark-surface-subdued",
    "awaiting payment":
      "text-text-decorative2 dark:text-dark-text-decorative2 bg-surface-decorative2 dark:bg-dark-surface-decorative2",
    "partial payment":
      "text-text-decorative1 dark:text-dark-text-decorative1 bg-surface-decorative1 dark:bg-dark-surface-decorative1",
    paid: "text-text-success bg-green-100",
    processing: "text-text-warning bg-yellow-100",
    "fixed (Non-current) assets":
      "text-text-success dark:text-dark-text-success bg-surface-success dark:bg-dark-surface-success",
    "current assets": "text-text-warning bg-yellow-shade-100",
    "non-current liabilities": "text-text-critical bg-background-red100",

    "current liabilities": "text-text-decorative1 bg-text-decorative",
    "equity and reserves": "text-text-awaiting bg-surface-decorative2",
    income:
      "text-text-success dark:text-dark-text-success bg-surface-success dark:bg-dark-surface-success",
    "cost of sales": "text-text-critical bg-background-red100",
    "administrative expenses": "text-text-critical bg-background-red100",
    "profit & loss": "bg-background-subdued text-text-secondary",
  };

  return statusClasses[status] || "Unknown Status";
};

export const getStatusText = (status: Status): string => {
  const statusTexts: Record<Status, string> = {
    none: "",
    paid: "Paid",
    draft: "Draft",
    unpaid: "Unpaid",
    active: "Active",
    archived: "Archived",
    completed: "Completed",
    processing: "Processing",
    "partial payment": "Partial payment",
    "awaiting payment": "Awaiting payment",
    "fixed (Non-current) assets": "Fixed (Non-current) assets",
    "current assets": "Current assets",
    "non-current liabilities": "Non-Current Liabilities",
    "current liabilities": "Current Liabilities",
    "equity and reserves": "Equity and Reserves",
    income: "Income",
    "cost of sales": "Cost of Sales",
    "administrative expenses": "Administrative Expense",
    "profit & loss": "Profit & Loss",
  };

  return statusTexts[status] || "Unknown Status";
};
