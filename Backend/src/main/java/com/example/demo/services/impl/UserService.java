package com.example.demo.services.impl;


import com.example.demo.dao.RoleDao;
import com.example.demo.dao.UserdDao;
import com.example.demo.entites.Role;
import com.example.demo.entites.User;
import com.example.demo.services.IUser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@Slf4j
public class UserService implements IUser {

    @Autowired
    private UserdDao userDao;
    @Autowired
    private RoleDao roleDao;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Integer registrerNewUser(User user) {
        Role role = roleDao.findOneByRoleName("Manager").get();
        if (role != null) {
            user.setRole(role);
            user.setUserPassword(getEncodedPassword(user.getUserPassword()));
            userDao.save(user);
            return 1;
        }
        else{
            return 0;
        }

    }

    @Override
    public void initRolesAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin Role");
        roleDao.save(adminRole);

        Role managerRole = new Role();
        managerRole.setRoleName("Manager");
        managerRole.setRoleDescription("default role for newly created record");
        roleDao.save(managerRole);

        User adminUser = new User();
        adminUser.setUserFirstName("admin");
        adminUser.setUserLastName("admin");
        adminUser.setUserEmail("admin123");
        adminUser.setUserPassword(getEncodedPassword("admin@pass"));
        adminUser.setRole(adminRole);
        userDao.save(adminUser);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }

}
