module.exports  = (cds) => {
    cds.on('hello', (req) => {
        return "Welcome " + req.data.name + " Welcome to CAP";
    });

    const{ ReadEmployeeSrv } = cds.entities;

    cds.on('READ', ReadEmployeeSrv, ()=> {
        let aData = [];
        aData.push({
            "ID": "02BD2137-0890-1EEA-A6C2-BB55C19787DE",
            "nameFirst": "Christiano",
            "nameLast": "Ronaldo"
        });
        aData.push({
            "ID": "02BD2137-0890-1EEA-A6C2-BB55C19787RR",
            "nameFirst": "Virat",
            "nameLast": "Kohli"
        });
        return aData;

        } );
    }
