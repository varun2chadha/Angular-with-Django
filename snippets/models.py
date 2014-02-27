from django.db import models

class CompanyName(models.Model) : 
	Created = models.DateTimeField(auto_now_add=True)
	Company_Name = models.TextField(max_length=50)

class Tab_Details(models.Model) : 
	Company = models.ForeignKey(CompanyName, related_name='Tab_Details')
	Tab_Name = models.TextField(max_length=50)
	Tab_Link  = models.TextField(max_length=50)
	Class     = models.TextField(max_length=10)

class DropDown_Buttons(models.Model):
	Company = models.ForeignKey(CompanyName, related_name='DropDown_Buttons')
	Tab_Name = models.TextField(max_length=50)
	Tab_Link  = models.TextField(max_length=50)

class DropDown_Buttons2(models.Model):
	Company = models.ForeignKey(CompanyName, related_name='DropDown_Buttons2')
	Button_Name = models.TextField(max_length=50)

class Footer(models.Model):
	key = models.TextField(max_length=50)
