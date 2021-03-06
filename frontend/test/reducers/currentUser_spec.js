import reducer from '../../src/reducers/currentUser'
import * as authActions from '../../src/actions/auth'
import * as usersActions from '../../src/actions/users'
import { Map } from 'immutable'
import { expect } from 'chai'

describe('currentUser reducer', () => {

  it('should toggle isFetching on CURRENT_USER action', () => {
    var newState = reducer(Map(), usersActions.currentUser())
    expect(newState.get('isFetching')).to.equal(true)
  })

  it('should return user and and change isFetching to false on CURRENT_USER_SUCCESS action', () => {
    var user = { name: 'Jojo', id: 1}
    var newState = reducer(Map(), usersActions.currentUserSuccess(user))
    expect(newState.get('isFetching')).to.equal(false)
    expect(newState.get('name')).to.equal('Jojo')
  })

  it('should change isFetching to false on CURRENT_USER_FAILURE action', () => {
    var user = { name: 'Jojo', id: 1}
    var newState = reducer(Map(), usersActions.currentUserFailure(user))
    expect(newState.get('isFetching')).to.equal(false)
  })

  it('should toggle isFetching on LOGIN action', () => {
    var newState = reducer(Map(), authActions.login())
    expect(newState.get('isFetching')).to.equal(true)
  })

  it('should return user and and change isFetching to false on  LOGIN_SUCCESS action', () => {
    var user = { name: 'Jojo', id: 1}
    var newState = reducer(Map(), authActions.loginSuccess(user))
    expect(newState.get('isFetching')).to.equal(false)
    expect(newState.get('name')).to.equal('Jojo')
  })

  it('should change isFetching to false on LOGIN_FAILURE action', () => {
    var newState = reducer(Map(), authActions.loginFailure())
    expect(newState.get('isFetching')).to.equal(false)
  })

  it('should change isFetching to true on REGISTRAION', () => {
    var newState = reducer(Map(), usersActions.registration())
    expect(newState.get('isFetching')).to.equal(true)
  })

  it('should change isFetching to false on REGISTRAION_FAILURE action', () => {
    var newState = reducer(Map(), usersActions.registrationFailure())
    expect(newState.get('isFetching')).to.equal(false)
  })

  it('should set current user and change isFetching to false on REGISTRAION_SUCCESS', () => {
    var user = { name: 'Jojo', id: 1}
    var newState = reducer(Map(), usersActions.registrationSuccess(user))
    expect(newState.get('isFetching')).to.equal(false)
    expect(newState.get('name')).to.equal('Jojo')
  })

  it('should change isFetching to true on USER_UPDATE', () => {
    var newState = reducer(Map(), usersActions.userUpdate())
    expect(newState.get('isFetching')).to.equal(true)
  })

  it('should change isFetching to false on USER_UPDATE action', () => {
    var newState = reducer(Map(), usersActions.userUpdateFailure())
    expect(newState.get('isFetching')).to.equal(false)
  })

  it('should set current user and change isFetching to false on USER_UPDATE', () => {
    var user = { name: 'Jojo', id: 1}
    var newState = reducer(Map(), usersActions.userUpdateSuccess(user))
    expect(newState.get('isFetching')).to.equal(false)
    expect(newState.get('name')).to.equal('Jojo')
  })
})
