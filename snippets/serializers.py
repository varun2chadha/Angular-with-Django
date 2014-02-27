from django.forms import widgets
from rest_framework import serializers
from snippets.models import CompanyName, Tab_Details, DropDown_Buttons , DropDown_Buttons2, Footer

### Header service start from here  :D :D ###


class TabSerializer(serializers.ModelSerializer):
	class Meta:
		model = Tab_Details
		fields = ('Tab_Name','Tab_Link','Class',)

class DropDownSerializer(serializers.ModelSerializer):
	class Meta:
		model = DropDown_Buttons
		fields = ('Tab_Name','Tab_Link',)

class CompanyNameSerializer(serializers.ModelSerializer):
	class Meta : 
		model = CompanyName
		fields = ('Company_Name',)

class DropDown2Serializer(serializers.ModelSerializer):
	class Meta : 
		model = DropDown_Buttons2
		fields = ('Button_Name',)

class HeaderSerializer(serializers.ModelSerializer):
	Tab_Details = TabSerializer(many=True)
	DropDown_Buttons = DropDownSerializer(many=True)
	DropDown_Buttons2 = DropDown2Serializer(many=True)

	class Meta :
		model = CompanyName
		fields = ('Company_Name','Tab_Details','DropDown_Buttons','DropDown_Buttons2')

class FooterSerializer(serializers.ModelSerializer):
	class Meta:
		model = Footer
		fields = ('key',)
