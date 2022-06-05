import { SubmitFeedbackUseCase } from './submit-feedback-use-case'

const createFeedbackSpy = jest.fn() //função espiã
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'exemple comment',
        screenshot: 'data:image/png;base64, daniel'
      })
    ).resolves.not.toThrow() //espero que dê tudo certo e retorne nenhum error

    expect(createFeedbackSpy).toHaveBeenCalled() //espero que a função createFeedbackSpy seja chamada
    expect(sendMailSpy).toHaveBeenCalled()
  })

  it('should not be able to submit a feedback without type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        comment: 'exemple comment',
        screenshot: 'data:image/png;base64, daniel'
      })
    ).rejects.toThrow() // espero que rejeite e retorne error
  })

  it('should not be able to submit a feedback without comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64, daniel'
      })
    ).rejects.toThrow()
  })

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'exemple comment',
        screenshot: 'test.jpg'
      })
    ).rejects.toThrow()
  })
})
