// ----------------------------------------------
        // Cria uma estrutura de dados com informações dos hemocentros 
        let hemocentros = [
            {
                id: 1,
                descricao: 'Hemocentro de Belo Horizonte',
                endereco: 'Alameda Ezequiel Dias, 321 - Santa Efigênia, Belo Horizonte - MG, 30130-110',
                cidade: 'Belo Horizonte',
                latlong: [-43.931893861368394,-19.923845967962297],
                url: 'http://www.hemominas.mg.gov.br/unidades-e-contratantes/rede-hemominas/hemocentro/belo-horizonte',
                cor: 'red'
            },
            {
                id: 2,
                descricao: 'Hemocentro Regional de Governador Valadares',
                endereco: 'R. Barão do Rio Branco, 707 - Centro, Gov. Valadares - MG, 35010-030',
                cidade: 'Governador Valadares',
                latlong: [-41.947070317837195,-18.8512976355643],
                url: 'http://www.hemominas.mg.gov.br/unidades-e-contratantes/rede-hemominas/hemocentro/governador-valadares',
                cor: 'red'
            },
            {
                id: 3,
                descricao: 'Hemocentro Regional de Juiz de Fora',
                endereco: 'Rua Barão de Cataguases, S/N - Santa Helena, Juiz de Fora - MG, 36015-370',
                cidade: 'Juiz de Fora',
                latlong: [-43.35203353310105,-21.753305495104925],
                url: 'http://hemominas.mg.gov.br/unidades-e-contratantes/rede-hemominas/hemocentro/juiz-de-fora',
                cor: 'red'
            },
            {
                id: 4,
                descricao: 'Hemocentro Regional de Pouso Alegre',
                endereco: 'Rua Comendador José García, 846 - Santa Elisa, Pouso Alegre - MG, 37550-000',
                cidade: 'Pouso Alegre',
                latlong: [-45.92917977356758,-22.2259807147344],
                url: 'http://www.hemominas.mg.gov.br/unidades-e-contratantes/rede-hemominas/hemocentro/pouso-alegre',
                cor: 'red'
            },
            {
                id: 5,
                descricao: 'Hemocentro Regional de Uberaba',
                endereco: 'Av. Getúlio Guaritá, 250 - Nossa Sra. da Abadia, Uberaba - MG, 38025-440',
                cidade: 'Uberaba',
                latlong: [-47.9306134153421,-19.75628058591114],
                url: 'http://www.hemominas.mg.gov.br/doe/conheca/hemocentros/722-regional-de-uberaba',
                cor: 'red' 
            }
        ]

        // --------------------------------------------------
        // Cria o mapa baseado na API Mapbox e adiciona no 
        // elemento de id: map        
        // --------------------------------------------------

        // ----------------------------------------------
        // Cria o mapa e adiciona no elemento de id: map 
        const centralLatLong= [-43.9397233,-19.9332786];

        mapboxgl.accessToken = 'pk.eyJ1IjoidnhyODkiLCJhIjoiY2xwajBzdTg5MDRmajJrcnY4ZnNucGs4OCJ9.TUYGn9dmPXyVpVRs24Jhdg';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: centralLatLong,
            zoom: 6
        });


        // ----------------------------------------------
        // Adiciona marcadores para os hemocentros
        hemocentros.forEach ((uni) => {
            let popup = new mapboxgl.Popup({ offset: 25 })
                .setHTML(`<h3><a href="${uni.url}" target="_blank">${uni.descricao}</a></h3><br>
                          ${uni.endereco} <br> ${uni.cidade}`);
            const marker = new mapboxgl.Marker({ color: uni.cor })
                .setLngLat(uni.latlong)
                .setPopup(popup)
                .addTo(map);     
        }) 


        // ----------------------------------------------
        // Adiciona um marcador com nossa posição no mapa
        function processarGeo (local) {
          let popup = new mapboxgl.Popup({ offset: 25 })
              .setHTML(`<h3> Você esta aqui! </h3>`);
          const marker = new mapboxgl.Marker({ color: 'yellow' })
              .setLngLat([local.coords.longitude, local.coords.latitude])
              .setPopup(popup)
              .addTo(map);  
        }

        navigator.geolocation.getCurrentPosition (processarGeo, () => { alert ('Erro ao obter localização.') })