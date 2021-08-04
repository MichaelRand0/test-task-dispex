import {
  instance
} from './instance'
export const housingAPI = {
  getStreets: companyId => {
    return instance.get(`HousingStock?companyId=${companyId}`).then(response => response)
  },
  getHouses: (companyId, streetId) => {
    return instance.get(`HousingStock?companyId=${companyId}&streetId=${streetId}`).then(response => response)
  },
  getFlats: (companyId, streetId, houseId) => {
    return instance.get(`HousingStock?companyId=${companyId}&streetId=${streetId}&houseId=${houseId}`)
  }
}

export const residentsAPI = {
  postResident: resident => {
    return instance.post(`HousingStock/client`, resident)
  },
  putResident: (AddressId, ClientId) => {
    return instance.put(`/HousingStock/bind_client`, {
      AddressId,
      ClientId
    })
  }
}

export const companiesAPI = {
  getCompanies: () => {
    return instance.get(`Request/companies`)
  }
}