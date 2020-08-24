<template>
  <q-page padding class="flex flex-center row">
    <div class="row col-12">
      <q-card bordered class="bg-grey-1 col-12">
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col-12">
                <div class="text-h6">TodoList - Cadastro</div>
              </div>
            </div>
          </q-card-section>

          <q-card-section>
            <div class="row col-12">
              <q-input v-model="novoUsuario.nome" class="col-12 q-mb-sm" filled outlined label="Informe o nome:" />
              <q-input v-model="novoUsuario.email" class="col-12 q-mb-sm" type="email" filled outlined label="Informe o email:" />
              <div class="text-caption q-mt-sm">
                <q-btn flat class="text-caption q-pa-none q-ma-none" to="/controle">Já sou cadastrado.</q-btn>
              </div>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <div class="text-right col 12">
              <q-btn color="primary" label="cadastrar" @click="createUser" />
            </div>
          </q-card-actions>
        </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      novoUsuario: {
        nome: '',
        email: ''
      }
    }
  },
  methods: {
    createUser () {
      this.$axios.post('http://localhost:3000/usuarios', this.novoUsuario).then(response => {
        console.log(response.data)
      })
    }
  }
}
</script>
