import path from 'path';
import express, { Application, Request, Response, NextFunction } from 'express';

const app = express();


app.get('/customers', (req: Request, res: Response)=>{
   const customers: object[] = [
      {id: '1', name: "Jeff"},
      {id: '3', name: "Lucy"}
   ]
   res.json(customers);
})

app.use((req: Request, res: Response)=>{
   res.set('Content-Type', 'text/html')
   res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
});

const port = 5000;
 
app.listen(port);