import { instance } from './instance'
export const housingAPI = {
  getStreets: companyId => {
    return instance.get(`HousingStock?companyId=${companyId}`).then(response => response)
  },
  getHouses: (companyId, streetId) => {
    return instance.get(`HousingStock?companyId=${companyId}&streetId=${streetId}`).then(response => response)
  }
}

export const companiesAPI = {
  getCompanies: () => {
    return instance.get(`Request/companies`)
  }
}