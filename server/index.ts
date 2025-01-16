import express, { Express, Request, Response} from 'express'
import cors from 'cors'


const app: Express = express();
app.use(cors());
app.use(express.json());

app.post('/box', (req: Request, res: Response): void => {
    {
        const { length, width, height } = req.body;

        if (!length || !width || !height) {
            res.status(400).send({ error: 'Missing dimensions' });
            return;
        }

        const vertices = [
            [0, 0, 0], [length, 0, 0], [length, width, 0], [0, width, 0],
            [0, 0, height], [length, 0, height], [length, width, height], [0, width, height]
        ];

        res.status(200).send({vertices});
    }
});


app.listen(5000, () => {
    console.log('Server started');
})