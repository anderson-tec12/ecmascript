const {proxy, revoke} = Proxy.revocable({},{});
proxy.teste = 'teste';
console.log(proxy.teste);
revoke();
console.log(proxy.teste);