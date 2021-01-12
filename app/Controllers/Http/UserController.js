'use strict'
const { validate } = use('Validator')
const User = use('App/Models/User')

class UserController {
  async CreateUser({request,response}){
    const UserCreate = request.only(['username', 'email', 'password', 'country'])
        const rules = {
          email: 'required|email|unique:users,email',
          password: 'required'
        }
        const validation = await validate(request.only(['email', 'password']), rules)

    if (validation.fails()) {

      return response.notAcceptable({status:"Info required"})
    }
      const user = await User.create(UserCreate)
    return response.created({
      status: true,
      data: user
    })

  }

  async UpdateUser({request,response}){
    const UserUpdate = request.only('Oemail')
        const Data = request.only(['username','email', 'password', 'country'])
        const user = await User.findByOrFail('email', UserUpdate['Oemail'])
        user.username = Data['username']
        user.email = Data['email']
        if (Data['password']){
            user.password = Data['password']
        }
        user.country = Data['country']
        await user.save()
        return response.ok({
            status: true,
            data: user
        })

  }
  async DeleteUser({request,response}){
    const email = request.only('email')
        const user = await User.findByOrFail('email', email['email'])
        await user.delete()


        return response.ok({
            status: true
        })

  }

  async AllUser({request,response}){
    const user = await User.all()

        return response.ok({
            status: true,
            data: user
        })
  }
}

module.exports = UserController
