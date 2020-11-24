<template>
  <q-page padding class="flex flex-center row">
    <div class="row col-12">
      <q-card bordered class="bg-grey-1 col-12">
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col-12">
                <div class="text-h6">TodoList - Login</div>
              </div>
            </div>
          </q-card-section>

          <q-card-section>
            <div>
              <q-input type="email" filled outlined label="Informe o email:" />
              <div class="text-caption q-mt-sm">
                <q-btn flat class="text-caption q-pa-none q-ma-none" to="/controle/sign-up">Clique para fazer o cadastro.</q-btn>
              </div>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <div class="text-right col 12">
              <q-btn color="primary" label="enviar" />
            </div>
          </q-card-actions>
        </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
