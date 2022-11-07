import { Modal, Button } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { getUpcomingMatch } from "../config/queries";
export default function HomeModal(props) {
  const { loading, error, data } = useQuery(getUpcomingMatch);
  const { getOneMatch } = data;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Eagel F.C VS {getOneMatch.opponent}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{getOneMatch.startDate}</h4>
            <p>{getOneMatch.availableSeats}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}
