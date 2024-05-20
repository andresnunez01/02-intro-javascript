// const getImagenPromesa = () => new Promise( resolve => resolve('htpps://adlsjldkjs00'))
// getImagenPromesa().then( console.log )


const getImagen = async () => {


    try {
        const apiKey = 'IRsSHLLXtbnN92rx40fzkYdk3i5bkOkK';

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        console.log(data)
        
        const { url } = data.images.original;


        console.log(url)
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
        
    } catch (error) {
        //manejo del error
        console.error(error)
        
    }
    
}

getImagen();

