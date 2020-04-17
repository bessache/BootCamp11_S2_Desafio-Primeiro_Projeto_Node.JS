import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ id, title, value, type }: Transaction): Transaction {
    const transaction = this.transactionsRepository.create({
      id,
      title,
      value,
      type,
    });
    return transaction;
  }
}

export default CreateTransactionService;
