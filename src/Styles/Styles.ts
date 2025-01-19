import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    title: {
    fontSize: 20,
    marginTop: -150,
    marginBottom: 20,
    },
    input: {
    width: '50%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    margin: 5,
    marginBottom:10,
    },
    button: {
    backgroundColor: '#3333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    // Sombra en Android
    elevation: -5, // Crea una sombra en Android
    // Sombra en iOS
    shadowColor: 'black', // Color de la sombra
    shadowOffset: {
        width: 3, // Desplazamiento horizontal
        height: 3, // Desplazamiento vertical
    },
    shadowOpacity: 0.25, // Opacidad de la sombra
    shadowRadius: 3.84, // Radio de difuminado
    },
    buttonText: {
    color: '606361',
    fontSize: 16,
    fontWeight: 'bold',
    },
});

export default styles;