package secondservice.businesslogic.ejb;

import jakarta.jws.WebService;

@WebService
public interface MoveToCaveRemote {
    boolean moveToCave(int teamId, int caveId) throws Exception;
}
