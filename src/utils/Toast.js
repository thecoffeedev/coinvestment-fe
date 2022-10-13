import { toast } from "react-toastify";

export function Toastify(status, message) {
  switch (status) {
    case "success":
      return toast.success(message);
    case "warning":
      return toast.warn(message);
    case "info":
      return toast.info(message);
    case "error":
      return toast.error(message);
    case "default":
      return toast(message);
    default:
      return toast(message);
  }
}
