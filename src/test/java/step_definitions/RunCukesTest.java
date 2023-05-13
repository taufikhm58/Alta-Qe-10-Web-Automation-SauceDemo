package step_definitions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        tags = {"@DailyTask"},       //Kelas Cucumber Yang Akan Dijalakan
        features = {"classpath:features/"}, //Package Yang Menyimpan Cucumber
        glue = { "classpath:step_definitions"}, //Tempat Dimana Final Method Tersimpan
        plugin= {"pretty","html:target/site/cucumber-pretty","json:target/cucumber/cucumber.json"} //Untuk Generate Report
)

public class RunCukesTest {
}
