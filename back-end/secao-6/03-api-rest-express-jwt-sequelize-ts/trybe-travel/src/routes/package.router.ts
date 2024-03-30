import { Router } from 'express';
import packageController from '../controllers/package.controller';

const router = Router();

router.patch('/:id', packageController.updatePackage);

router.delete('/:id', packageController.deletePackage);

export default router;