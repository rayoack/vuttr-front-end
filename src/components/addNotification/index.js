import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { css } from "glamor";

export default function addNotification() {
  let toastId = null;

  if (!toast.isActive(toastId)) {
    console.log("Displaying Toast");
    toastId = toast("Tool successfully added!", {
      className: css({
        background: "#12DB89 !important",
        height: '158px',
        width: '305px',
        color: "white !important",
        fontWeight: "regular"
      }),
      closeOnClick: false,
      toastId: "add_toast",
      autoClose: false,
      closeButton: true,
      position: toast.POSITION.TOP_RIGHT
    });
  } else {
    console.log("Toast already active");
  }
}
