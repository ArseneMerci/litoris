import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor:'#2e37fe',
        '& a': {
            color:'#ffffff',
            marginLeft:10,
        },
    },
    brand:{
        fontWeight:'bold',
        fontSize:'1.5rem'
    },
    grow:{
        flexGrow: 1,
    },
    main: {
        minHeight:'80vh',
    },
    footer: {
        marginTop:10,
        textAlign:'center'
    },
    section:{
        marginTop:10,
        marginBottom: 10,
    },
    form:{
        maxWidth:800,
        margin: '0 auto'
    },
    navbarButton:{
        color: '#ffffff',
        textTransform:'initial',
    },
    h1:{
        fontSize: 32
    },
    h2:{
        fontSize: 25
    },
    bgPrimary:{
        backgroundColor:'#831842',
        color:"#fff"
    }
});
export default useStyles;