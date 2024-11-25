import Swal from 'sweetalert2';

export { toastAlert, confirmDialog, successDialog, loadingAlert, messageAlert };

const toastAlert = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "成功加入購物車"
    });
}

const loadingAlert = (title) => {
    Swal.fire({
        title,
        timer: 800,
        timerProgressBar: true,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
    });
}

const confirmDialog = (title, fn, text) => {
    Swal.fire({
        title,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "移除",
        cancelButtonText: "取消"
    }).then((result) => {
        if (result.isConfirmed) {
            let status = fn();
            status.then(res => {
                if (res === 200) {
                    Swal.fire({
                        text,
                        icon: "success"
                    });
                }
            })
        }
    });
}

const successDialog = () => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "訂單已送出！",
        showConfirmButton: false,
        timer: 1500
    });
}

const messageAlert = (message) => {
    Swal.fire(`${message}`);
}