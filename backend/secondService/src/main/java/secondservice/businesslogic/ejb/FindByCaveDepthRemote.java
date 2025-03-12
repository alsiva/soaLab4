package secondservice.businesslogic.ejb;

import jakarta.jws.WebService;
import secondservice.businesslogic.DragonDto.DragonDto;

@WebService
public interface FindByCaveDepthRemote {
    DragonDto getDragon(boolean max) throws Exception;
}
