import { resetApolloContext, useMutation, useQuery } from "@apollo/client";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { POST_ORDER, UPDATE_ISPAID } from "../config/mutations";
import { getBookedSeat, getTransactionDetail } from "../config/queries";
import FadeLoader from "react-spinners/FadeLoader";
import { TbListDetails } from "react-icons/tb";

export default function ModalPayment(props) {
  const navigate = useNavigate();

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  const { error, loading, data } = useQuery(getTransactionDetail, {
    variables: {
      getTransactionDetailId: props.transactionId,
    },
  });
  const [
    updatePayment,
    {
      error: errorPaymentUpdate,
      loading: loadingPayment,
      data: dataPayment,
      reset,
    },
  ] = useMutation(UPDATE_ISPAID, {
    onCompleted: () => {
      // navigate("/");
    },
    refetchQueries: [
      {
        query: getBookedSeat,
        variables: {
          getTransactionByMatchId: data?.getTransactionDetail?.MatchId,
        },
      },
    ],
  });

  const [
    postOrder,
    { error: errorOrder, loading: loadingOrder, data: orderData },
  ] = useMutation(POST_ORDER, {
    onCompleted: (dataOrder) => {
      window.snap.pay(`${dataOrder?.postOrder?.transactionToken}`, {
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
        <div className="row">
          <div
            className="col-2 mx-auto"
            style={{
              textAlign: "center",
            }}
          >
            <FadeLoader color="#36d7b7" />
          </div>
        </div>
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
                  <h4>
                    <TbListDetails
                      style={{
                        marginRight: "0.5rem",
                        marginBottom: "0.2rem",
                      }}
                    />
                    Ticket Detail
                  </h4>
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-3 mx-auto">
                <p>KTP </p>
              </div>
              <div className="col-9 mx-auto">
                <p>: {data?.getTransactionDetail?.ktp}</p>
              </div>
              <div className="col-3 mx-auto">
                <p>Email </p>
              </div>
              <div className="col-9 mx-auto">
                <p>: {data?.getTransactionDetail?.email}</p>
              </div>
              <div className="col-3 mx-auto">
                <p>Category </p>
              </div>
              <div className="col-9 mx-auto">
                <p>: {data?.getTransactionDetail?.categorySeat}</p>
              </div>
              <div className="col-3 mx-auto">
                <p>Total Price </p>
              </div>
              <div className="col-9 mx-auto">
                <p>
                  :{" "}
                  {formatRupiah(
                    data?.getTransactionDetail?.Seats?.length * 150000
                  )}
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="row" style={{ width: "100%" }}>
              <div className="col-8 mx-auto" style={{ textAlign: "center" }}>
                <Button variant="secondary" onClick={closeHandler}>
                  Close
                </Button>
                &nbsp;&nbsp;
                <Button
                  variant="dark"
                  onClick={() => {
                    postOrder({
                      variables: {
                        postOrderId: props.transactionId,
                      },
                    });
                  }}
                >
                  Pay
                </Button>
              </div>
            </div>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}
