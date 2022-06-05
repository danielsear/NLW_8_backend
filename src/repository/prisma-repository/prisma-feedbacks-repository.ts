import { Prisma } from '../../prisma'
import {
  FeedbacksRepository,
  FeedbacksCreateData
} from '../feedbacks-repository'

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbacksCreateData) {
    await Prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}
