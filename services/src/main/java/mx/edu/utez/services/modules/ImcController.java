package mx.edu.utez.services.modules;

import mx.edu.utez.services.utils.APIResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/imc")
@CrossOrigin(origins = "*")
public class ImcController {

    @Autowired
    private ImcService imcService;

    @PostMapping
    public APIResponse calcularImc(@RequestParam double peso, @RequestParam double altura) {
        double imc = imcService.calcularImc(peso, altura);
        return new APIResponse(true, "IMC calculado correctamente", imc);
    }
}