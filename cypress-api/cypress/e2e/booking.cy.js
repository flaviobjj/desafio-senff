describe('API Restful Booker', () => {

  let bookingId
  let token

  const bookingData = {
    firstname: "Flavio",
    lastname: "QA",
    totalprice: 1000,
    depositpaid: true,
    bookingdates: {
      checkin: "2024-01-01",
      checkout: "2024-01-10"
    },
    additionalneeds: "Breakfast"
  }

  before(() => {
    // 🔐 Gerar token
    cy.request('POST', '/auth', {
      username: 'admin',
      password: 'password123'
    }).then((res) => {
      token = res.body.token
    })

    // 🟢 Criar reserva
    cy.request('POST', '/booking', bookingData)
      .then((res) => {
        bookingId = res.body.bookingid
        // Exibir no console para confirmar
        cy.log('Booking ID:', bookingId)
      })
  })

  it('GET - Consultar reserva', () => {
    // Garantir que bookingId existe
    cy.log('Booking ID no GET:', bookingId)
    cy.request(`/booking/${bookingId}`)
      .then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.firstname).to.eq('Flavio')
      })
  })

  it('PUT - Atualizar reserva', () => {
    const updatedData = {
      firstname: "Flavio Updated",
      lastname: "QA",
      totalprice: 1500,
      depositpaid: false,
      bookingdates: {
        checkin: "2024-02-01",
        checkout: "2024-02-10"
      },
      additionalneeds: "Lunch"
    }

    cy.request({
      method: 'PUT',
      url: `/booking/${bookingId}`,
      headers: { Cookie: `token=${token}` },
      body: updatedData
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.firstname).to.eq('Flavio Updated')
    })
  })

  it('DELETE - Excluir reserva', () => {
    cy.request({
      method: 'DELETE',
      url: `/booking/${bookingId}`,
      headers: { Cookie: `token=${token}` }
    }).then((res) => {
      expect(res.status).to.eq(201)
    })
  })

})