import Swal from "sweetalert2";

const alertSuccess = (message = "Success!") => {
  return Swal.fire({
    position: "center",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 2000,
  });
};

const alertDelete = (preConfirms, afterConfirm) => {
  Swal.fire({
    title: "Delete!",
    text: "Are you sure you want to delete?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#EB483F",
    cancelButtonColor: "#9CA1AD",
    cancelButtonText: "No, Cancel",
    confirmButtonText: "Yes, delete!",
    preConfirm: (id) => {
      if (preConfirms) {
        return preConfirms(id)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error.message}`);
          });
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      afterConfirm && afterConfirm();
      Swal.fire({
        title: "Deleted!",
        text: "Deleted successfully!!",
        icon: "success",
      });
    }
  });
};

const alertError = (text) =>
  Swal.fire({
    title: "Error",
    text: text,
    icon: "failure",
  });

const alertConfirm = (text) =>
  Swal.fire({
    title: "Are you sure?",
    text: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  });

export { alertSuccess, alertDelete, alertError, alertConfirm };
