import { Router } from 'express';
import transactionController from '../controllers/transaction.controller';

const router = Router();

// router.get('/:id', transactionController.listById);
router.get('/', transactionController.listAll);

router.post('/', transactionController.create);

export default router;
