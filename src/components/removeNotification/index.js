import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { css } from "glamor";

export default function removeNotification() {
  let toastId = null;

  if (!toast.isActive(toastId)) {
    console.log("Displaying Toast");
    toastId = toast("Tool successfully removed!", {
      className: css({
        background: "#F95E5A !important",
        height: '158px',
        width: '305px',
        color: "white !important",
        fontWeight: "regular"
      }),
      closeOnClick: false,
      toastId: "remove_toast",
      autoClose: false,
      closeButton: true,
      position: toast.POSITION.TOP_RIGHT
    });
  } else {
    console.log("Toast already active");
  }
}
