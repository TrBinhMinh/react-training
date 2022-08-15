import { uiActions } from "./ui";
import { cartActions } from "./cart";

export const fetchCartData = function () {
    return async (dispatch) => {
        const fetchData = async function () {
            const res = await fetch(
                "https://advance-redux-6ae2f-default-rtdb.firebaseio.com/cart.json"
            );

            if (!res.ok) throw new Error("Could not fetch the data!");

            const data = await res.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(
                cartActions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                })
            );
        } catch (err) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: err.message,
                })
            );
        }
    };
};

export const sendCartData = function (cart) {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Sending...",
                message: "Sending cart data!",
            })
        );

        const sendRequest = async function () {
            const res = await fetch(
                "https://advance-redux-6ae2f-default-rtdb.firebaseio.com/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );

            if (!res.ok) throw new Error("Sending cart data failed!");
        };

        try {
            await sendRequest();

            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sent cart data successfully!",
                })
            );
        } catch (err) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: err.message,
                })
            );
        }
    };
};
