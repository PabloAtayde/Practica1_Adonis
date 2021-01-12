'use strict'
const Route = use('Route')

Route.delete('/delete', 'UserController.DeleteUser')
Route.post('/create', 'UserController.CreateUser').middleware(['country'])
Route.get('/all', 'UserController.AllUser')
Route.post('/update', 'UserController.UpdateUser')
