import { useMutation, useQuery } from "@apollo/client";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { POST_ORDER, UPDATE_ISPAID } from "../config/mutations";
import { getTransactionDetail } from "../config/queries";
export default function ModalPayment(props) {
  const navigate = useNavigate();

  const { error, loading, data } = useQuery(getTransactionDetail, {
    variables: {
      getTransactionDetailId: props.transactionId,
    },
  });
  const [
    updatePayment,
    { error: errorPaymentUpdate, loading: loadingPayment, data: dataPayment },
  ] = useMutation(UPDATE_ISPAID, {
    onCompleted: (data) => {
      console.log(data);
      console.log("Berhasil");
      navigate("/");
    },
  });

  const [
    postOrder,
    { error: errorOrder, loading: loadingOrder, data: orderData },
  ] = useMutation(POST_ORDER, {
    onCompleted: (data) => {
      window.snap.pay(`${data?.postOrder?.transactionToken}`, {
        onSuccess: async (result) => {
          updatePayment({
            variables: {
              updateTransaction: {
                TransactionId: +props.transactionId,
                transaction_status: result.transaction_status,
              },
            },
          });
        },
        onPending: function (result) {
          console.log("pending");
          console.log(result);
        },
        onError: function (result) {
          console.log("error");
          console.log(result);
        },
        onClose: function () {
          console.log(
            "customer closed the popup without finishing the payment"
          );
        },
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const closeHandler = () => {
    props.onHide();
    navigate("/");
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {loading ? (
        <h2>Loading....</h2>
      ) : (
        <>
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              <div
                className="row"
                style={{
                  textAlign: "center",

                  width: "30.5rem",
                }}
              >
                <div className="col-6 mx-auto" style={{ marginTop: "0.5rem" }}>
                  <h4>Ticket Detail</h4>
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>KTP : {data?.getTransactionDetail?.ktp}</p>
            <p>Email : {data?.getTransactionDetail?.email}</p>
            <p>Category : {data?.getTransactionDetail?.categorySeat}</p>

            <p>
              Total Price : {data?.getTransactionDetail?.Seats?.length * 150000}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                console.log(props.transactionId);
                postOrder({
                  variables: {
                    postOrderId: props.transactionId,
                  },
                });
                console.log(props.transactionId);
              }}
            >
              Pay
            </Button>
            <Button onClick={closeHandler}>Close</Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}
