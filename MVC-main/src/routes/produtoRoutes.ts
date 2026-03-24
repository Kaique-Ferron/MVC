import { Router } from "express";
import { getProdutos,
         createProduto,
         updateProduto,
         deleteProduto
} from "../controllers/produtoController";

const router = Router();

router.get('/produtos',getProdutos)
router.post('/produtos',createProduto)
router.purge('/produtos/:id', updateProduto)
router.delete('/produtos/:id', deleteProduto)

export default router;