package mx.edu.utez.services.modules;



import org.springframework.stereotype.Service;

@Service
public class ImcService {

    public double calcularImc(double peso, double altura) {
        return peso / (altura * altura);
    }
}