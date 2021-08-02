import { instance } from './instance'
export const streetsAPI = {
  getStreets: (companyId, streetId) => {
    return instance.get(`HousingStock?companyId=${companyId}&streetId=${streetId}`).then(response => response)
  }
}

export const companiesAPI = {
  getCompanies: () => {
    return instance.get(`Request/companies`)
  }
}