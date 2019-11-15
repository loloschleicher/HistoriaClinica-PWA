delimiter //

create PROCEDURE Turnos_Historial (in dni int)
BEGIN

    select      pro.especialidad,
                pro.apellido,
                pro.nombre,
                year(tur.fechaAtencion) as anioAtencion,
                month(tur.fechaAtencion) as mesAtencion, 
                day(tur.fechaAtencion) as diaAtencion,
                tur.horaAtencion,
                tur.fechaAtencion,
                if((current_date()> tur.fechaAtencion or current_date() = tur.fechaAtencion) 
                        and current_time() > tur.horaAtencion,"Atendido","No Atendido") as estado
    from        Pacientes pac inner join 
                Turnos tur on 
                pac.numeroHistoriaClinica = tur.paciente  inner join 
                Profesionales pro on 
                tur.profesional = pro.numeroMatricula
    where       pac.numeroDniPaciente = dni;

END


//delimiter ;