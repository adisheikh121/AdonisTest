'use strict'

const Route = use('Route')

Route.post('users','UserController.store')
Route.get('users','UserController.index')
Route.post('sessions','SessionController.store')
Route.post('reset-password','ForgotPasswordController.store')
Route.patch('password-update','ForgotPasswordController.update')
Route.post('files','FileController.store')
