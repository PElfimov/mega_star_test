import {Component} from "react"
import {Spinner} from "react-bootstrap"
import {connect, useDispatch, useSelector} from "react-redux"
import {DetailsForm} from "../../components/detailsForm"
import {Department, DetailsField, RootStore} from "../../lib/interfaces"
import {getBlockedForm, getDepartment, getDepartmentLoading} from "../../redux/reducers/selectors/selectors"
import styles from "./departmentsDetails.module.css"
import {history} from "./../../redux/reducers/index"
import {blockedForm} from "../../redux/reducers/app/actions"
import {saveDepartment, updateDepartment} from "./../../redux/reducers/departmentDetails/actions"
import {ButtonGroup} from "../../components/buttonGroup"
import {observer} from "mobx-react"
import {action, computed, observable} from "mobx"

type Props = {
  department?: Department
  loading?: boolean
  formIsBlocked?: boolean
}

@observer
class DepartmentsDetails extends Component<Props> {
  @observable
  private department: Department = {id: 0, name: "", status: `active`, description: ""}

  @action
  _initialState() {
    this.department = {...this.department, ...this.props.department}
  }

  @computed
  get field(): DetailsField[] {
    return [
      {
        label: `Id`,
        name: `id`,
        disabled: true,
        vale: this.department.id,
        onChange: this.onChangeHandler
      },
      {
        label: `Name`,
        name: `name`,
        disabled: this.props.formIsBlocked,
        vale: this.department.name,
        onChange: this.onChangeHandler
      },
      {
        label: `Description`,
        name: `description`,
        disabled: this.props.formIsBlocked,
        vale: this.department.description,
        onChange: this.onChangeHandler
      }
    ]
  }

  onChangeHandler(e) {
    // const value = {...data}
    // value[e.target.name] = e.target.value
    // dispatch(updateDepartment(value))
  }
  onCancel(event) {
    // dispatch(blockedForm())
    // history.push(`/departments`)
  }

  onSave(event) {
    // dispatch(saveDepartment(data))
  }

  componentDidMount() {
    this._initialState()
    console.log(`this.department didUpdate`, this.department)
  }

  render() {
    const {loading} = this.props //useSelector(getDepartmentDetails)
    let HTML: JSX.Element = <DetailsForm field={this.field} />
    if (loading) HTML = <Spinner animation="border" />
    return (
      <div className={styles.root}>
        <h3>Departments Details</h3>
        {HTML}
        <ButtonGroup onCancel={this.onCancel} onSave={this.onSave} />
      </div>
    )
  }
}

const mapStateToProps = (state: RootStore, ownProps) =>
  Object.assign({}, ownProps, {
    department: getDepartment(state),
    loading: getDepartmentLoading(state),
    formIsBlocked: getBlockedForm(state)
  })

const mapDispatchToProps = (dispatch) => ({
  // changeCity: (city) => {
  //   dispatch(ActionCreator.changeCity(city));
  // },
  // isLogin: ()=>{
  //   dispatch(Operation.getLogin());
  // }
})

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsDetails)
