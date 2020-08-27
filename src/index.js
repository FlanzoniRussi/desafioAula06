import Cliente from './Cliente';
import Conta from './Conta';
import Movimentacao from './Movimentacao';

const clienteDados1 = new Cliente('asd23423-sad3211-ssd546ad',
'João Faria','joao@mail.com','222.222.222-22',1500.00)
const clienteConta1 = new Conta(
'2h3i12uh-0ggh0d9h-93hb9fh',
253.22)
const cliente1Movimentacao1 = new Movimentacao(
'Pizza Express',
120.22,
'remove')
const cliente1Movimentacao2 = new Movimentacao(
  'O Rei Merlin',
  40,22,
  'remove')
const cliente1Movimentacao3 = new Movimentacao(
  'Deposito Cliente',
  120.22,
  'add')

const clienteDados2 = new Cliente('aasd3f54ndc-09n5058376-29385029v8n',
'Pedro Faria','pedro@mail.com','333.333.333-22',200.00)
const clienteConta2 = new Conta(
'2sadas12-123adhsadh-93hb23ra',
2253.22)
const cliente2Movimentacao1 = new Movimentacao(
'Autoposto SuperGas',
30.22,
'remove')
const cliente2Movimentacao2 = new Movimentacao(
  'Restaurante BoFood',
  230.22,
  'remove')
const cliente2Movimentacao3 = new Movimentacao(
  'Fast soup',
  80.22,
  'remove')

const clienteDados3 = new Cliente('bhj3b1pk2-hhad43287-8h9h9g873g94',
'João Rubens de Souza','joao@mail.com','132.321.456-22',1500.00)
const clienteConta3 = new Conta(
'2saasd12-asdsad2312dh-45sdhb2ra',
253.22)
const cliente3Movimentacao1 = new Movimentacao(
'Deposito Luiz da Silva',
998.44,
'add')
const cliente3Movimentacao2 = new Movimentacao(
  'Deposito Mapple LTDA',
  575.89,
  'add')
const cliente3Movimentacao3 = new Movimentacao(
  'Compra BestBuyer',
  1320.22,
  'remove')

const cliente1 = [clienteDados1, clienteConta1, [cliente1Movimentacao1, cliente1Movimentacao2, cliente1Movimentacao3]];
const cliente2 = [clienteDados2, clienteConta2, [cliente2Movimentacao1, cliente2Movimentacao2, cliente2Movimentacao3]];
const cliente3 = [clienteDados3, clienteConta3, [cliente3Movimentacao1, cliente3Movimentacao2, cliente3Movimentacao3,]];

const clientes = [cliente1, cliente2, cliente3];

console.log(JSON.stringify(clientes, undefined, 2));

