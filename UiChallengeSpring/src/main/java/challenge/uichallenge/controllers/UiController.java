package challenge.uichallenge.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UiController
{
	@GetMapping("/hello")
    public String getDefault()
    {
        return "Hello from default page.";
    }
}
