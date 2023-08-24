import axios from "axios";

function getRequestStatus(id, licencePlate, cluster) {
  axios.get(`${process.env.PROVISIONER_STATUSCHECK_URL}/${cluster}-${licencePlate}-${id}`)
    .then(function (response) {
      if (response.data.metadata.labels['workflows.argoproj.io/completed'] === 'true') {
        if (response.data.metadata.labels['workflows.argoproj.io/phase'] === 'Succeeded') {
          console.log(`Product with cluster - ${cluster}, licencePlate - ${licencePlate} id - ${id} - Provisioned successfully`)
        }
        if (response.data.metadata.labels['workflows.argoproj.io/phase'] === 'Error') {
          console.log(`Product with cluster - ${cluster}, licencePlate - ${licencePlate} id - ${id} - Provisioned failed`)
        }
      }
      if (response.data.metadata.labels['workflows.argoproj.io/completed'] === 'null'
        && response.data.metadata.labels['workflows.argoproj.io/phase'] === 'Running') {
        console.log(`Product with cluster - ${cluster}, licencePlate - ${licencePlate} id - ${id} - provisioning is still running`)
      }
      else console.log(`Product with cluster - ${cluster}, licencePlate - ${licencePlate} id - ${id} - 
      workflows.argoproj.io/phase - ${response.data.metadata.labels['workflows.argoproj.io/phase']} - 
      workflows.argoproj.io/completed - ${response.data.metadata.labels['workflows.argoproj.io/completed']}`)
    })
    .catch(function (error) {
      console.log(error);
    })
}

export default getRequestStatus;
