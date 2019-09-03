package challenge.uichallenge.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.lang.Math.*;

@RestController
public class UiController
{
	@GetMapping("/app-time")
    public List<String> showAppDate()
    {
        String appName = "UiChallenge";
        LocalDate currentTime = LocalDate.now();

        return new ArrayList<String>(Arrays.asList(appName, currentTime.toString()));
    }

    @PostMapping("/circumference")
    public double getRadius(@RequestBody double radius)
    {
        return 2 * Math.PI * radius;
    }
}
