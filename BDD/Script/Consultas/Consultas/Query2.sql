select m.descripcion ,max(m.cantidadDeDiagnosticos) as cantidad
from (
        
        select count(*) as cantidadDeDiagnosticos, d.descripcion as descripcion
        from AtencionMedica a , Diagnosticos d
        where a.diagnostico = d.codigoDiagnostico
        group by a.diagnostico
        
    ) as m;