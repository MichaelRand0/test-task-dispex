import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCompaniesThunk } from '../../redux/reducers/companiesReducer'
import { Companies } from './Companies'
import { changeCompanyId } from './../../redux/reducers/companiesReducer'

const CompaniesContainer = props => {
  useEffect(() => {
    props.getCompaniesThunk()
  }, [])
  return (
    <Companies changeCompanyId={props.changeCompanyId} companiesArr={props.companiesArr} />
  )
}

const mapStateToProps = state => {
  return {
    companyId: state.companies.companyId,
    companiesArr: state.companies.companiesArr
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCompanyId: id => dispatch(changeCompanyId(id)),
    getCompaniesThunk: () => dispatch(getCompaniesThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesContainer)