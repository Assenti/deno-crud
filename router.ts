import { Router } from './deps.ts';
const router = new Router();

router.get('/', (req: any, res: any) => {
    res.send('GET METHOD')
})

router.post('/post', (req: any, res: any) => {
    console.log(req.parsedBody)
    res.send('POST METHOD')
})

router.put('/put', (req: any, res: any) => {
    console.log(req.parsedBody)
    res.send('PUT METHOD')
})

router.delete('/delete/:id', (req: any, res: any) => {
    console.log(req.params.id)
    res.send('DELETE METHOD')
})

export default router;