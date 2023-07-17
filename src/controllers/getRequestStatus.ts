import axios from "axios";

function getRequestStatus(id, licencePlate, cluster) {
  axios.get(`${process.env.PROVISIONER_STATUSCHECK_URL}/${cluster}-${licencePlate}-${id}`)
    .then(function (response) {
      if (response.data.metadata.labels['workflows.argoproj.io/completed'] === 'true' &&
        response.data.metadata.labels['workflows.argoproj.io/phase'] === 'Succeeded') {
        console.log("Provisioned successfully")
      }
      else console.log("Not provisioned successfully")
    })
    .catch(function (error) {
      console.log(error);
    })
}

export default getRequestStatus;
