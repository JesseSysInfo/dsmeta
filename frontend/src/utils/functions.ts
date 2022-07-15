
export const formatCurrencyBr = (a: number) =>
{
    return a.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}